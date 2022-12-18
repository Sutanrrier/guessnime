package com.sutanrrier.guessnime.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sutanrrier.guessnime.entities.AnimeCover;
import com.sutanrrier.guessnime.repositories.AnimeCoverRepository;

@Service
public class AnimeCoverService {


	@Autowired
	private AnimeCoverRepository coverRepository;
	
	public List<AnimeCover> getAllAnimeCovers(){
		return coverRepository.findAll();
	}
	
	public AnimeCover getAnimeCoverById(Long id) {	
		return coverRepository.findById(id).get();
	}
	
	public AnimeCover insertAnimeCover(AnimeCover animeCover) {
		return coverRepository.save(animeCover);
	}
	
}
