package com.srp.constelinknotice.db.repository;

import com.srp.constelinknotice.db.entity.Notice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Long> {

	Page<Notice> findAll(Pageable pageable);
}
