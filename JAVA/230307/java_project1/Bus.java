package java_project1;

public class Bus extends FourWheels{
	
	public Bus () {
		setPublic(true);
		setName("Bus");
	}
	
	public void checkName(String name) {
		String result = getName().equals(name)
				? getColor()+" "+getName()+"입니다" 
				: name+"(은/는)아닙니다";
		System.out.println(result);
	}
}
