package java_project1;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
//	public static void hello() {
//		System.out.println("hello");
//		
//	}
//	
//	public static int sum(int num1, int num2) {
//		return num1+num2;
//	}
//	
//	public static void main(String[] args) {
//		hello();
//		System.out.println(sum(1,2));
//	}
	
//	public static double sum(double num1, double num2) {
//		return num1+num2;
//	}
//	public static double sub(double num1, double num2) {
//		return num1-num2;
//	}
//	public static double div(double num1, double num2) {
//		return num1/num2;
//	}
//	public static double mul(double num1, double num2) {
//		return num1*num2;
//	}
//	public static void evaluate(double num1, double num2) {
//		System.out.println("덧셈 결과 : "+(num1+num2));
//		System.out.println("뺄셈 결과 : "+(num1-num2));
//		System.out.println("나눗셈 결과 : "+(num1/num2));
//		System.out.println("곱셈 결과 : "+(num1*num2));
//	}
	
	public static void printArray(int[] arr) {
		for(int i=0;i<arr.length;i++) {
			if(i==0) {
				System.out.print("[");
			}
			if(i==arr.length -1)System.out.print(arr[i]+"]");
			else System.out.print(arr[i]+", ");
		}
	}
		

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		System.out.println("Hello World");
//		System.out.print("Hello World");
//		Scanner scanner = new Scanner(System.in);
		
//		System.out.println("이름, 나이, 키, 결혼 여부를 입력해주세요.");
//
//		String name = scanner.next();
//		int age = scanner.nextInt();
//		double height = scanner.nextDouble();
//		boolean single = scanner.nextBoolean();
//		
//		scanner.close();
//		
//		System.out.println("안녕하세요, 저는 "+name + "(" + age + ")입니다. 키는 " + height +"이고 결혼여부는 " + single + "입니다");
//		System.out.println("이름을 입력하세요");
//		String name = scanner.next();
//		System.out.println("나이를 입력하세요");
//		int age = scanner.nextInt();
//		scanner.close();
//		
//		System.out.println("안녕하세요!" +name+"님(" +age+ "세)" );
		
		
//		String str1 = new String("홍길동");
//		String str2 = "홍길동";
//		
//		
//		if(str1 == "홍길동" ) System.out.println(true);
//		else System.out.println(false);
		
//		int num = 10;
//		
//		switch (num) {
//		case 0:
//			System.out.println("0");
//			break;
//		case 1:
//			System.out.println("1");
//			break;
//		default:
//			System.out.println("Not 0 or 1");
//		}
		
//		 for(int i=0;i<10;i++) {
//			 System.out.println(i);
//		 }
		 
//		int i = 10;
//		 while(i<10) {
//			 System.out.println(i);
//			 i++;
//		 }
//
//		int j =10;
//		do {
//			System.out.println(j);
//			j++;
//		}
//		while(j<10);
		
//		System.out.println("나이를 입력하세요");
//		int age = scanner.nextInt();
//		
//		if(age>=1 && age<=7) {
//			System.out.println("유아");
//		}else if(age<=13) {
//			System.out.println("초등학생");
//		}else if(age<=16) {
//			System.out.println("중학생");
//		}else if(age<=19) {
//			System.out.println("고등학생");
//		}else if(age>=20){
//			System.out.println("성인");
//		}else{
//		 System.out.println("나이를 바르게 입력해주세요");
//		}
//		
//		System.out.println("이름을 입력하세요");
//		String name = scanner.next();
//		
//		if(name.equals("성춘향")){
//			System.out.println("여자");
//		}else if(name.equals("홍길동")) {
//			System.out.println("남자");
//		}else {
//			System.out.println("모르겠어요.");
//		}
		
//		System.out.println("숫자를 입력하세요");
//		int num = scanner.nextInt();
//		
//		for(int i=1;i<=num;i++) {
//			System.out.print(i);
//		}
		
//		System.out.println("숫자 두 개를 입력하세요");
//		
//		double num1 = scanner.nextDouble();
//		double num2 = scanner.nextDouble();

//		System.out.println("덧셈 결과 : "+ sum(num1,num2));
//		System.out.println("뺄셈 결과 : "+ sub(num1,num2));
//		System.out.println("나눗셈 결과 : "+ div(num1,num2));
//		System.out.println("곱셈 결과 : "+ mul(num1,num2));
//		
//		evaluate(num1,num2);
		
		int[] arr1 = {0,0,0};
		int[] arr2 = new int[3];
		
//		for(int i=0;i<arr1.length;i++) {
//			System.out.print(arr1[i]+" ");
//		}
		
//		for(int value : arr1 ) {
//			System.out.print(value+" ");
//		}
//				
//		System.out.println(Arrays.toString(arr1));
		
		String str = Arrays.toString(arr1);
		System.out.println(str);
		
//		printArray(arr1);

		

}
}
