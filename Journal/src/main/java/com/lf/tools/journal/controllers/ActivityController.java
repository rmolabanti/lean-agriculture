package com.lf.tools.journal.controllers;

import java.util.Random;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lf.tools.journal.models.Activity;

@RestController
public class ActivityController {

	@RequestMapping("/test")
	public String test(){
		return "test";
	}
	
	@RequestMapping(value="/activity",method=RequestMethod.POST)
	public Activity addActivity(@RequestBody Activity activity){
		activity.setId(new Random().nextLong());
		return activity;
	}
}
