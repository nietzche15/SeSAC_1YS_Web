package java_project1;

import java.util.Scanner;

public class Cat extends Animal {		
	Scanner scanner = new Scanner(System.in);
	private String color;

	public Cat(String name, int age) {
		setSpecies("고양이");
		setName(name);
		setAge(age);
	}
	
	public void makeSound() {
		System.out.println("무슨 색인가요 ?");
		this.color = scanner.next();
		System.out.println(color + " 고양이 "+ getName() +"("+ getAge() +"살) 야옹");
	}
}
