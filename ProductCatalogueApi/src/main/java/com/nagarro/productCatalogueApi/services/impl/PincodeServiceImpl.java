package com.nagarro.productCatalogueApi.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.productCatalogueApi.model.Pincode;
import com.nagarro.productCatalogueApi.repository.PincodeRepository;
import com.nagarro.productCatalogueApi.services.PincodeService;


@Service
public class PincodeServiceImpl implements PincodeService{
	
	@Autowired
	private PincodeRepository pincodeRepository;

	@Override
	public Pincode findPincode(int pin) {
		Pincode pincode=null;
		pincode=pincodeRepository.findByPincode(pin);
		return pincode;
	}
}
