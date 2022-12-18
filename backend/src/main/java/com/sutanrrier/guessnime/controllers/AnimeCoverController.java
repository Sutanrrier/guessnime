package com.sutanrrier.guessnime.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sutanrrier.guessnime.entities.AnimeCover;
import com.sutanrrier.guessnime.services.AnimeCoverService;

@RestController
@RequestMapping(value = "/anime-covers")
public class AnimeCoverController {
	
	@Autowired
	private AnimeCoverService coverService;
	
	@GetMapping
	public ResponseEntity<List<AnimeCover>> getAllAnimeCovers(){
		return ResponseEntity.status(HttpStatus.OK).body(coverService.getAllAnimeCovers());
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<AnimeCover> getAnimeCoverById(@PathVariable Long id){
		return ResponseEntity.status(HttpStatus.OK).body(coverService.getAnimeCoverById(id));
	}
	
	@PostMapping(value = "/insert")
	public ResponseEntity<AnimeCover> insertAnimeCover(@RequestBody AnimeCover animeCover){
		return ResponseEntity.status(HttpStatus.CREATED).body(coverService.insertAnimeCover(animeCover));
	}
	
}
