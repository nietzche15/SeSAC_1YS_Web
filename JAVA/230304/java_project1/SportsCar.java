package java_project1;

public class SportsCar extends FourWheels {
	
	public SportsCar() {
		setPublic(true);
		setName("Sports Car");
	}
	
	public void checkName(String name) {
		String result = getName().equals(name)
				? getColor()+" "+getName()+"입니다" 
				: name+"(은/는)아닙니다";
		System.out.println(result);
	}
}
