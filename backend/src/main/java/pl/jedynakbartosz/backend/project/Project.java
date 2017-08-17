package pl.jedynakbartosz.backend.project;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@Data
@Entity
@Table(name = "PROJECT")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", nullable = false)
    private Long id;

    @NotNull
    @Column(name = "NAME", nullable = false, length = 250)
    private String name;

    @NotNull
    @Column(name = "DATE_CREATED", nullable = false, length = 250)
    private Date dateCreated;


}
