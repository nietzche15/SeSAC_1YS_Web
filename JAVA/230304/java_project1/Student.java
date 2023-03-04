package java_project1;

public class Student extends Person {
	private String studentID;
	
	
	public Student() {
		// 클래스가 실행되자마자 부모클래스의 생성자 실행	- Person()
		// parameter 있는 생성자 실행시키고 싶다면 - super(~);
//		super("정새싹", 88);
		setName("왕새싹");
		this.name = "조새싹";
//		this.age = 10; private 접근 불가
		System.out.println("[Student] An instance has been generated.");
	}
	
	public void test() {
		System.out.println("test in Student");
	}
	
	public void sleep() {
		System.out.println("Go to sleep at 12PM");
	}
	
	public void study() {
		setName("");
		System.out.println("Study hard");
	}
	
	public String getStudentID() {
		return studentID;
	}
	public void setStudentID(String studentID) {
		this.studentID = studentID;
	}
	

}
