package com.example.videogames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.videogames.models.consolesModel;

@Repository
public interface IconsolesRepository extends JpaRepository<consolesModel, Long> {
}
