package com.example.example_final_md5.service.impl;

import com.example.example_final_md5.model.BusType;
import com.example.example_final_md5.repository.IBusTypeRepository;
import com.example.example_final_md5.service.IBusTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusTypeService implements IBusTypeService {
    @Autowired
    private IBusTypeRepository iBusTypeRepository;

    @Override
    public List<BusType> findAll() {
        return iBusTypeRepository.findAll();
    }
}
