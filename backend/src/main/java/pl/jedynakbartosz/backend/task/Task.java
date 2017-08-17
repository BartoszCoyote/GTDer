package pl.jedynakbartosz.backend.task;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Data
@Table(name = "TASK")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", nullable = false)
    private Long id;

    @NotNull
    @Column(name = "NAME", nullable = false, length = 250)
    private String name;

    @Column(name = "DATE_CREATED")
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

}
