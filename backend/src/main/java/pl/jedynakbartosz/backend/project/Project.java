package pl.jedynakbartosz.backend.project;

import lombok.Data;
import pl.jedynakbartosz.backend.task.Task;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;
import java.util.List;

@Data
@Entity
@Table(name = "PROJECT")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @NotNull
    @Column(name = "NAME")
    private String name;

    @NotNull
    @Column(name = "DATE_CREATED")
    private Date dateCreated;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "project")
    private List<Task> tasks;

    public Project() {
    }

    public Project(String name, Date dateCreated, List<Task> tasks) {
        this.name = name;
        this.dateCreated = dateCreated;
        this.tasks = tasks;
    }
}
