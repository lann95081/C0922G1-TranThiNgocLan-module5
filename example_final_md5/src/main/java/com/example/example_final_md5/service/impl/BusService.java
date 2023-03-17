package com.example.example_final_md5.service.impl;

import com.example.example_final_md5.model.Bus;
import com.example.example_final_md5.repository.IBusRepository;
import com.example.example_final_md5.service.IBusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BusService implements IBusService {
    @Autowired
    private IBusRepository iBusRepository;

    @Override
    public Page<Bus> findAll(Pageable pageable) {
        return iBusRepository.findAll(pageable);
    }
}
