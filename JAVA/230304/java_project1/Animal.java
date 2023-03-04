package java_project1;

public class Animal {
	private String species;
	private String name;
	private int age;
	
	public Animal() {
	}
	
	public Animal(String species,String name) {
		this.species = species;
		this.name = name;
		System.out.println(species +" "+ name +"입니다.");
	}
	
	
	public String getSpecies() {
		return species;
	}


	public void setSpecies(String species) {
		this.species = species;
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


	public void makeSound() {
		System.out.println("동물은 소리를 낸다.");
	}
}
