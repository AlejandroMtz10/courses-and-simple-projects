package com.example.videogames.services;

import com.example.videogames.models.consolesModel;
import com.example.videogames.repositories.IconsolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class consolesService {
    @Autowired
    private IconsolesRepository consolesRepository;

    public List<consolesModel> getAllconsoles(){
        return consolesRepository.findAll();
    }

    public Optional<consolesModel> getConsoleById(Long id){
        return consolesRepository.findById(id);
    }

    public consolesModel createConsole (consolesModel console){
        return consolesRepository.save(console);
    }

    public consolesModel updateConsole(Long id, consolesModel consoles){
        if (consolesRepository.existsById(id)) {
            consoles.setId_console(id);
            return consolesRepository.save(consoles);
        }else{
            return null;
        }
    }

    public void deleteConsole(Long id){
        consolesRepository.deleteById(id);
    }
}
