package com.restaurant.mfp.rserver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.persistence.EntityManager;
import javax.sql.DataSource;
import java.util.HashMap;

@Configuration
@PropertySource({"classpath:application.properties"})
@EnableJpaRepositories(basePackages = "com.restaurant.mfp.rserver.dao.staffing", entityManagerFactoryRef = "staffEntityManager", transactionManagerRef = "staffTransactionManager")
@Profile("!tc")
public class PersistenceStaffAutoConfigurator {

    @Autowired
    private Environment env;
//    @Autowired
//    private DataSource staffDataSource;
//    @Autowired
//    private EntityManager staffEntityManager;

    public PersistenceStaffAutoConfigurator() {
        super();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean staffEntityManager() {
        final LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(staffDataSource());
        em.setPackagesToScan("com.restaurant.mfp.rserver.model.staffing");

        final HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        em.setJpaVendorAdapter(vendorAdapter);
        final HashMap<String, Object> properties = new HashMap<String, Object>();
        properties.put("hibernate.hbm2ddl.auto", env.getProperty("hibernate.hbm2ddl.auto"));
        properties.put("hibernate.dialect", env.getProperty("hibernate.dialect"));
        em.setJpaPropertyMap(properties);

        return em;
    }

    @Bean
    @ConfigurationProperties(prefix="spring.second-datasource")
    public DataSource staffDataSource() {
        return DataSourceBuilder.create().build();
    }


    @Bean
    public PlatformTransactionManager staffTransactionManager() {

        JpaTransactionManager transactionManager
                = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(
                staffEntityManager().getObject());
        return transactionManager;
    }
}
