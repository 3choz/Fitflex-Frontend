<template>
    <header class="header_section">
        <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container">
                <a class="navbar-brand" href="index.html">
                    <img src="images/logo.png" alt="" />
                    <span>
                        Energym
                    </span>
                </a>
                <div class="contact_nav" id="">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link" href="service.html">
                                <img src="images/location.png" alt="" />
                                <span>Location</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="service.html">
                                <img src="images/call.png" alt="" />
                                <span>Call : + 01 1234567890</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="service.html">
                                <img src="images/envelope.png" alt="" />
                                <span>demo@gmail.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: "HeaderBar",
  props: {
    msg: String,
  },
};
</script>