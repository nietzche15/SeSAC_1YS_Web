package java_project1;

import java.util.Scanner;

public class Dog extends Animal {
	Scanner scanner = new Scanner(System.in);
	private boolean fluffy;

	public Dog(String name, int age) {
		setSpecies("강아지");
		setName(name);
		setAge(age);
	}

	public void makeSound() {
		System.out.println("털이 긴가요? [true/false]");
		this.fluffy = scanner.nextBoolean();		
		System.out.print(fluffy==true ? "복슬 강아지 " :"보들 강아지 ");
		System.out.print( getName() +"("+ getAge()+ "살) 멍멍" );
	}
}
