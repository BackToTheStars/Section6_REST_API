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
	bool recording = false;
	bool startNewRecording = false;
	bool firstRun = true;
	int videoNumber = 0;

	VideoCapture cap(0);                         // open the video camera no. 0 (Dell integrated webcam)

	cv::VideoWriter writer;

	if (!cap.isOpened())                         // if not success, exit program
	{
		cout << "ERROR INITIALIZING VIDEO CAPTURE" << endl;
		return -1;
	}

	char* windowName = "Webcam Feed";
	namedWindow(windowName, CV_WINDOW_AUTOSIZE); //create a window to display our webcam feed

	int fcc = CV_FOURCC('D', 'I', 'V', '3');     // fourcc integer

	int fps = 30;                                // frames per sec integer

	cv::Size frameSize(cap.get(CV_CAP_PROP_FRAME_WIDTH), cap.get(CV_CAP_PROP_FRAME_HEIGHT));  // frame size

	while (1) {

		if (startNewRecording == true) {

			startNewRecording = false;
			recording = true;
			
			videoNumber++;
			
			string filename = "E:\myVideo" + intToString(videoNumber) + ".avi";	         
			                                              
			writer = VideoWriter(filename, fcc, fps, frameSize);  // initialize "writer" object
			
			if (!writer.isOpened()) {
				cout << "ERROR OPENING FILE FOR WRITING" << endl;
				getchar();

				return -1;
			}
		}

		Mat frame;

		bool bSuccess = cap.read(frame); // read a new frame from camera feed

		if (!bSuccess) {                 // test if frame successfully read
			cout << "ERROR READING FRAME FROM CAMERA FEED" << endl;
			break;
		}
		
		if (recording == true) {

			writer.write(frame);         // writes the video file
			string textInVideo = "REC at " + intToString(fps) + "fps";  // what to print in video window
			putText(frame, textInVideo, Point(20, 40), 1, 2, Scalar(0, 0, 255));
			                             // if to put writer.writer second, then "REC" will appears in the file
		}

		imshow(windowName, frame);       // show the frame in "MyVideo" window

		switch (waitKey(10)) {	         // listen for 10ms for a key to be pressed
		case 27:                         // 'esc' has been pressed (ASCII value for 'esc' is 27) 
			return 0;                    // exit program.
			
		case 114:  // r button is pressed (upper and lower cases have different codes, we take decimal value)
			
			recording = !recording;      // toggle recording
			
			if (recording == true) cout << "Begin recording" << endl;
			else cout << "Recording paused" << endl;

			if (firstRun) {

				string filename = "E:\myVideo0.avi";                  
				writer = VideoWriter(filename, fcc, fps, frameSize);  // initialize "writer" object
				recording = true;
				firstRun = false;

				if (!writer.isOpened()) {
					cout << "ERROR OPENING FILE FOR WRITING" << endl;
					getchar();

					return -1;
				}
			}
			break;

		case 110:  // n button is pressed (upper and lower cases have different codes, we take decimal value)
			
			startNewRecording = true;    // start new recording
			cout << "New recording started" << endl;

			if (firstRun == true) firstRun = false;
			
			break;

		}
	}
	return 0;
}