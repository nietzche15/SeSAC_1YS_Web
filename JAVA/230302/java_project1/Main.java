package java_project1;

import java.util.ArrayList;
import java.util.Scanner;

import test.Hello;

import java.util.InputMismatchException;


public class Main{
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
//		Number number1 = new Number();
//		Number number2 = new Number();
//		
//		number1.num1 = 1;
//		number1.num2 = 1;
		
//		System.out.println(number1.num1);
//		System.out.println(number1.num2);

//		System.out.println(number2.num1);
//		System.out.println(number2.num2);
//		System.out.println(Number.num1);
//		System.out.println(Number.num2);

		
		
		
		ArrayList<Rectangle> rect = new ArrayList<>();
		
		while(true) {
			System.out.println("사각형의 가로와 세로의 길이를 띄어쓰기를 기준으로 입력해주세요.");
			int width = scanner.nextInt();
			int height = scanner.nextInt();
			
			Rectangle rectangle1 = new Rectangle(width);
			
			rectangle1.setHeight(height);
			
			if(width==0 && height==0) break;
			else { rect.add( rectangle1 ); rectangle1.count = rect.size();};
		}
		
		for(Rectangle rectangle1 : rect) {
			System.out.println("가로 길이는: "+ rectangle1.getWidth() );
			System.out.println("세로 길이는: "+ rectangle1.getHeight());
			System.out.println("넓이는: "+ rectangle1.area() );
			System.out.println("----------------------------");
		}
		
		System.out.println("Rectangle 인스턴스의 개수는: "+ Rectangle.count);

		
		

//		Person person1 = new Person();
//		
//		person1.setName("정새싹");
//		System.out.println(person1.getName());


		
	}
}