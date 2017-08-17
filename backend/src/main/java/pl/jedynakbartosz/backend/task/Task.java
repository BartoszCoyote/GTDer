package pl.jedynakbartosz.backend.task;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import pl.jedynakbartosz.backend.project.Project;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "TASK")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DATE_CREATED")
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "PROJECT_ID", referencedColumnName = "id")
    private Project project;


    public Task() {

    }

    public Task(String name, Date createDate, Project project) {
        this.name = name;
        this.createDate = createDate;
        this.project = project;
    }
}
