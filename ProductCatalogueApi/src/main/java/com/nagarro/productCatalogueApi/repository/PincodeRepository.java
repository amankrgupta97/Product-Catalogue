package com.nagarro.productCatalogueApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.productCatalogueApi.model.Pincode;

public interface PincodeRepository extends JpaRepository<Pincode,Integer> {
	
	Pincode findByPincode(int pin);

}
