package ru.javabean.minimalg.dao

import org.springframework.data.mongodb.repository.MongoRepository
import ru.javabean.minimalg.model.Place


interface PlaceRepository extends MongoRepository<Place, String> {
}
