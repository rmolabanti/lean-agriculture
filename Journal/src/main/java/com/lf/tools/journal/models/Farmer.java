package com.lf.tools.journal.models;

import java.util.List;

public class Farmer {
	
	private long id;
	private String firstName;
	private String lastName;
	private List<Farm> farms;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public List<Farm> getFarms() {
		return farms;
	}
	public void setFarms(List<Farm> farms) {
		this.farms = farms;
	}
	
}
