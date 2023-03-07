package java_project1;

public class Baek extends Student2 {
	
	public Baek(String name, String school, int age, int studentID) {
		setName(name);
		setSchool(school);
		setAge(age);
		setStudentID(studentID);
	}

	
	public void todo() {
		System.out.println( getName() + "(" +getAge() + ","+ getSchool() + "["+ getStudentID()+ "])" + "의 점심은 백종원 피자");
	}
}
