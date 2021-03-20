package com.example.niteshlearning.demo.repository;

import com.example.niteshlearning.demo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long > {

}
