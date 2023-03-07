package java_project1;
import java.util.Scanner;


public class Main{
	
	public static void main(String[] args) {
		
		Kim k = new Kim("김새싹","용산대",20,2023141002);
		Baek b = new Baek("백새싹","마포대",21,2022141002);
		
		k.todo();
		b.todo();

		
		
//		Scanner scanner = new Scanner(System.in);
//		Bus b = new Bus();
//		SportsCar s = new SportsCar();
//		
//		System.out.println("Vehicle은 공공재입니까? [true/false]");
//		boolean isPublic = scanner.nextBoolean();
//		
//		System.out.println("색상을 입력해주세요");
//		String color = scanner.next();
//		
//		String name = scanner.nextLine();
//		System.out.println("추측되는 이름을 입력해주세요");
//		name = scanner.nextLine();
//		
//		if(isPublic == true) {
//			b.setColor(color); 
//			b.checkName(name);
//		}else if(isPublic == false){
//			s.setColor(color); 
//			s.checkName(name);
//		}
//		
//		scanner.close();		
		
		
		

//		System.out.println("동물의 종과 이름, 나이를 차례로 입력해주세요.");
//		String species = scanner.next();
//		String name = scanner.next();
//		int age = scanner.nextInt();
//		
//		Cat c = new Cat(name, age);
//		Dog d = new Dog(name, age);
//		
//		if(species.equals("고양이")) c.makeSound();
//		else if (species.equals("강아지"))d.makeSound();
//		scanner.close();
	}
}