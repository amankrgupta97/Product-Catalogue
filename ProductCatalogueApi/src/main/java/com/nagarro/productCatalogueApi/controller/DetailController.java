package com.nagarro.productCatalogueApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.productCatalogueApi.model.Pincode;
import com.nagarro.productCatalogueApi.services.PincodeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DetailController {
	
	@Autowired
	private PincodeService pincodeService;
	
	@GetMapping("/api/v1/check/{pin}")
	public ResponseEntity<Integer> checkAvailability(@PathVariable("pin") int pin) throws Exception{
		Pincode pincode=pincodeService.findPincode(pin);
		if(pincode==null) {
			throw new Exception("Not available");
		}
		return ResponseEntity.ok(pincode.getDaysToReach());
	}
}
