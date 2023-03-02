package java_project1;

public class Person {
	public String name;
	public int age;
	
	// 생성자
//	public Person(String name, int age) {
//		System.out.println("Welcome !");
//		this.name = name;
//		this.age = age;
//		// 이름이 같은 경우, 변수에서 선언한 필드명 앞에 this
//	}
	
	public Person(String name) {
		this.name = name;
	}
	
	// getter & setter
	public String getName(){
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge(){
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	// method
	public void myname() {
		System.out.println("My name is "+ name );
	}

}
