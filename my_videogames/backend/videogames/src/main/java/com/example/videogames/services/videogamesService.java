package com.example.videogames.services;

import com.example.videogames.models.videogamesModel;
import com.example.videogames.dtos.VideogamesDTO;
import com.example.videogames.repositories.IvideogamesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class videogamesService {
    @Autowired
    private IvideogamesRepository videogameRepository;

    public List<videogamesModel> getAllVideogames(){
        return videogameRepository.findAll();
    }

    public List<VideogamesDTO> getAllVideogamesDTOs() {
        List<videogamesModel> games = videogameRepository.findAll();
        return games.stream().map(VideogamesDTO::new).toList();
    }

    public Optional<videogamesModel> getVideogameById(Long id){
        return videogameRepository.findById(id);
    }

    public videogamesModel createVideogame (videogamesModel videogame){
        return videogameRepository.save(videogame);
    }

    public videogamesModel updateVideogame(Long id, videogamesModel videogame){
        if (videogameRepository.existsById(id)) {
            videogame.setId_videogame(id);
            return videogameRepository.save(videogame);
        }else{
            return null;
        }
    }

    public void deleteVideogame(Long id){
        videogameRepository.deleteById(id);
    }
}
