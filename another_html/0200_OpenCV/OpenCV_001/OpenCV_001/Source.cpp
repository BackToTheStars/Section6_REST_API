
#include <iostream>
#include <opencv2\highgui\highgui.hpp>
#include <opencv2\imgproc.hpp>

using namespace cv;
using namespace std;

Mat src, dst, temp; // n-dimentional arrays to hold the pixels values

int main() {     

	src = imread("c:\\Users\\Nikolay Grigoryev\\Desktop\\1.jpg", CV_LOAD_IMAGE_ANYCOLOR);
	
	if (src.data == NULL) { // exit if there is no file
		cout << "Error: Image could not be loaded, Invalid Path"
			<< endl;
		getchar();
		return -1;
	};

	cvNamedWindow("Original Image", CV_WINDOW_AUTOSIZE);
	cvNamedWindow("Scaled", CV_WINDOW_AUTOSIZE);

	imshow("Original Image", src);
	temp = src;
	dst = temp;
	imshow("Scaled", dst);
	while (true) {
		int c = waitKey(10);
		if ((char)c == 27) { break; }

		if ((char)c == 'u') {
			pyrUp(temp, dst, Size(temp.cols * 2, temp.rows * 2));
		}
		if ((char)c == 'd') {
			pyrDown(temp, dst, Size(temp.cols / 2, temp.rows / 2));
		}
		imshow("Scaled", dst);
		temp = dst;
	}
	return 0;
}