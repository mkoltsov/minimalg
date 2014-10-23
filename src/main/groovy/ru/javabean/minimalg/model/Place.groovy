package ru.javabean.minimalg.model

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "places")
public class Place {
    @Id
    String name
    String address
    BigDecimal latitude
    BigDecimal longitude
    String icon
    BigDecimal temp




}
