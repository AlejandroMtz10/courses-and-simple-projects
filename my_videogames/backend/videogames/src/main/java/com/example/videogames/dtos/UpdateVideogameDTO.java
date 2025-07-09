package com.example.videogames.dtos;

public class UpdateVideogameDTO {
    private float price;
    private float historyCompleted; // Cambiado a camelCase
    private boolean gameCompleted;  // Cambiado a camelCase

    // Constructor vacío (necesario para deserialización de JSON)
    public UpdateVideogameDTO() {}

    // Getters
    public float getPrice() {
        return price;
    }

    public float getHistoryCompleted() { // Cambiado a camelCase
        return historyCompleted;
    }

    public boolean isGameCompleted() { // Cambiado a camelCase
        return gameCompleted;
    }

    // Setters
    public void setPrice(float price) {
        this.price = price;
    }

    public void setHistoryCompleted(float historyCompleted) { // Cambiado a camelCase
        this.historyCompleted = historyCompleted;
    }

    public void setGameCompleted(boolean gameCompleted) { // Cambiado a camelCase
        this.gameCompleted = gameCompleted;
    }
}