package java_project1;

public class Kim extends Student2{
	
	public Kim(String name, String school, int age, int studentID) {
		setName(name);
		setSchool(school);
		setAge(age);
		setStudentID(studentID);
	}
	
	
	public void todo() {
		System.out.println( getName() + "(" +getAge() + ","+ getSchool() + "["+ getStudentID()+ "])" + "의 점심은 김가네 김밥");
	}

}
