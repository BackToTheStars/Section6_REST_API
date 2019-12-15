#include <opencv\highgui.h>
#include <opencv\cv.hpp>
#include <iostream>

using namespace cv;
using namespace std;

string intToString(int number) {

	std::stringstream ss;
	ss << number;
	return ss.str();
}

int main(int argc, char* argv[])
{
	VideoCapture cap(0);                         // open the video camera no. 0 (Dell integrated webcam)

	cv::VideoWriter writer;

	if (!cap.isOpened())                         // if not success, exit program
	{
		cout << "ERROR INITIALIZING VIDEO CAPTURE" << endl;
		return -1;
	}

	char* windowName = "Webcam Feed";
	namedWindow(windowName, CV_WINDOW_AUTOSIZE); //create a window to display our webcam feed
	
	string filename = "E:\myVideo.avi";	         // filename string

	int fcc = CV_FOURCC('D', 'I', 'V', '3');     // fourcc integer
	
	int fps = 30;                                // frames per sec integer
	
	cv::Size frameSize(cap.get(CV_CAP_PROP_FRAME_WIDTH), cap.get(CV_CAP_PROP_FRAME_HEIGHT));  // frame size

	writer = VideoWriter(filename, fcc, fps, frameSize);

	if (!writer.isOpened()) {
		cout << "ERROR OPENING FILE FOR WRITING" << endl;
		getchar();

		return -1;
	}

	while (1) {

		Mat frame;

		bool bSuccess = cap.read(frame); // read a new frame from camera feed

		if (!bSuccess) {                 // test if frame successfully read
			cout << "ERROR READING FRAME FROM CAMERA FEED" << endl;
			break;
		}

		writer.write(frame);             // writes the video file

		imshow(windowName, frame);       // show the frame in "MyVideo" window
							
		switch (waitKey(10)) {	         // listen for 10ms for a key to be pressed
			case 27:                     // 'esc' has been pressed (ASCII value for 'esc' is 27) 
				return 0;                // exit program.
		}
		
	}
	return 0;
}