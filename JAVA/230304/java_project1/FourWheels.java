package java_project1;

public class FourWheels {
	private boolean isPublic;
	private String color;
	private String name;
	
	public void checkName(String name) {
		this.name = name;
		System.out.println(name+ "은 바퀴가 4개입니다");
	}
	
	public boolean isPublic() {
		return isPublic;
	}

	public void setPublic(boolean isPublic) {
		this.isPublic = isPublic;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
