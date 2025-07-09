package com.example.videogames.services;

import com.example.videogames.models.videogamesModel;
import com.example.videogames.dtos.VideogamesDTO;
import com.example.videogames.repositories.IvideogamesRepository;
import jakarta.transaction.Transactional;
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

    // Este método devuelve la entidad completa, necesario para el PUT (actualización)
    public Optional<videogamesModel> getVideogameById(Long id){ // <-- ¡ASEGÚRATE DE TENER ESTE MÉTODO!
        return videogameRepository.findById(id);
    }

    // Este método devuelve el DTO, que es el que usas para el GET individual de la API REST
    @Transactional // ¡Crucial para evitar LazyInitializationException en el GET por ID!
    public Optional<VideogamesDTO> getVideogameDTOById(Long id){
        return videogameRepository.findById(id)
                .map(vg -> {
                    // Forzar la carga de las relaciones LAZY si las vas a usar en el DTO
                    if (vg.getConsole() != null) {
                        vg.getConsole().getConsole();
                    }
                    if (vg.getClasification() != null) {
                        vg.getClasification().getClasification();
                    }
                    return new VideogamesDTO(vg);
                });
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
