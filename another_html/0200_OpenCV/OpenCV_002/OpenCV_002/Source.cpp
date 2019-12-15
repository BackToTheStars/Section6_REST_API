// THIS IS THE TUTORIAL HOW TO STREAM VIDEO FROM WEBCAMERA TO WINDOW
// it is from here: https://youtu.be/cgo0UitHfp8?list=PLvwB65U8V0HHCEyW2UTyOJym5FsdqfbHQ


#include <opencv\cv.hpp>
#include <opencv\highgui.h>

using namespace cv;

int main(){;

Mat image;                   // creates matrix to store image

VideoCapture cap;            // initializes capture
cap.open(0);

namedWindow("window", 1);    // creates window to show image

while (1) {

	cap >> image;            // copy webcam stream to image

	imshow("window", image); // print image to screen

	waitKey(33);             // delay 33 ms
}

return 0;
}