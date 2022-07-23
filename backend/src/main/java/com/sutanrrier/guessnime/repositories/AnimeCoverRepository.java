package com.sutanrrier.guessnime.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sutanrrier.guessnime.entities.AnimeCover;

@Repository
public interface AnimeCoverRepository extends JpaRepository<AnimeCover, Long> {

}
