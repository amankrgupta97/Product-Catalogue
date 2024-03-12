package com.nagarro.productCatalogueApi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pincode {

	@Id
	@Column(name="pincode")
	private int pincode;
	@Column(name="daysToReach")
	private int daysToReach;

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public int getDaysToReach() {
		return daysToReach;
	}

	public void setDaysToReach(int daysToReach) {
		this.daysToReach = daysToReach;
	}

}
