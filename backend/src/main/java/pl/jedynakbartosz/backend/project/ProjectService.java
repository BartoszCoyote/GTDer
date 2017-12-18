package pl.jedynakbartosz.backend.project;

import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.jedynakbartosz.backend.user.UserRepository;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProjectService {

  private final ProjectRepository projectRepository;
  private final ProjectMapper projectMapper;
  private final UserRepository userRepository;

  @Transactional
  public ProjectDto create(ProjectDto projectDto) {

    Project project = projectMapper.map(projectDto);

    projectRepository.save(project);

    return ProjectMapper.map(project);
  }

  @Transactional
  public List<ProjectDto> findALl() {
    return projectRepository
        .findAll()
        .stream()
        .map(ProjectMapper::map)
        .collect(Collectors.toList());
  }
}
