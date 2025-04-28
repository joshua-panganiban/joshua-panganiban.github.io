<?php
$current_page = basename($_SERVER['PHP_SELF']);
$is_home = $current_page === 'index.php';
?>

<header>
    <a href="./index.php" class="logo">Joshua Panganiban</a>
    <nav class="nav-center">
        <a href="<?= $is_home ? '#about' : './index.php#about' ?>" class="active">About</a>
        <a href="./index.php#news">News</a>
        <a href="./research.php">Research</a>
        <a href="./experience.php">Experience</a>
        <a href="./contact.php">Contact</a>
    </nav>
    <div class="nav-right">
        <button class="mode-toggle" id="mode-toggle">
            <i class="fa-solid fa-moon"></i> 
        </button>
        <button class="hamburger" id="hamburger">
            <i class="fa-solid fa-bars"></i>
        </button>
    </div>
</header>

<div class="mobile-menu" id="mobile-menu">
    <a href="<?= $is_home ? '#about' : './index.php#about' ?>" class="active">About</a>
    <a href="./index.php#news">News</a>
    <a href="./research.php">Research</a>
    <a href="./experience.php">Experience</a>
    <a href="./contact.php">Contact</a>
</div>