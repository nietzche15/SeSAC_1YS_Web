package java_project1;

public class Person {
	protected String name;
	private int age;
	
	public void test() {
		System.out.println("test in Person");
	}
	
	// 함수 오버로딩
	// 생성자 매개변수X
	public Person() {
		System.out.println("[Person] An instance has been generated");
	}
	// 생성자 매개변수 2개
	public Person(String name, int age) {
		this.name = name;
		this.age = age;
		System.out.println("[Person] An instance w/ parameters has been generated");
	}
	
	public void sleep() {
		System.out.println("Go to sleep at 10PM");
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
//	public String name;
//	public int age;
//	
//	// 생성자
////	public Person(String name, int age) {
////		System.out.println("Welcome !");
////		this.name = name;
////		this.age = age;
////		// 이름이 같은 경우, 변수에서 선언한 필드명 앞에 this
////	}
//	
//	public Person(String name) {
//		this.name = name;
//	}
//	
//	// getter & setter
//	public String getName(){
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public int getAge(){
//		return age;
//	}
//	public void setAge(int age) {
//		this.age = age;
//	}
//	
//	// method
//	public void myname() {
//		System.out.println("My name is "+ name );
//	}


}
