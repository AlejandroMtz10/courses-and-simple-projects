package com.example.videogames.services;

import com.example.videogames.models.clasifications_esrbModel;
import com.example.videogames.repositories.Iclasifications_esrbRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class clasifications_esrbService {
    @Autowired
    private Iclasifications_esrbRepository clasificationsRepository;

    public List<clasifications_esrbModel> getAllClasifications(){
        return clasificationsRepository.findAll();
    }

    public Optional<clasifications_esrbModel> getClasificationById(Long id){
        return clasificationsRepository.findById(id);
    }

    public clasifications_esrbModel createClasification (clasifications_esrbModel clasification){
        return clasificationsRepository.save(clasification);
    }

    public clasifications_esrbModel updateClasification(Long id, clasifications_esrbModel clasification){
        if (clasificationsRepository.existsById(id)) {
            clasification.setId_clasification(id);
            return clasificationsRepository.save(clasification);
        }else{
            return null;
        }
    }

    public void deleteClasification_esrb(Long id){
        clasificationsRepository.deleteById(id);
    }
}
