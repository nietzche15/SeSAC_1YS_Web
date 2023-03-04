package java_project1;

public class Rectangle {
	private int width;
	private int height;
	public static int count =0;

	public Rectangle(int width) {
		this.width = width;
//		this.height = height;
	}
	
	public int getWidth() {
		return width;
	}
	public void setWidth(int width) {
		this.width = width;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	
	public int area() {
		return width*height;
	}
}
