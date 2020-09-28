<template>
  <div class="left side-menu">
    <div v-slimscroll="options" class="slimscroll-menu" id="remove-scroll">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu" id="side-menu">
          <li class="menu-title">Navigation</li>
          <li>
            <a href="index.html">
              <i class="fi-air-play"></i
              ><span class="badge badge-danger badge-pill pull-right">3</span>
              <span> Dashboard </span>
            </a>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i class="fi-briefcase"></i> <span> UI Kit </span>
              <span class="menu-arrow"></span
            ></a>
            <ul class="nav-second-level" aria-expanded="false">
              <li><a href="ui-typography.html">Typography</a></li>
              <li><a href="ui-cards.html">Cards</a></li>
              <li><a href="ui-buttons.html">Buttons</a></li>
              <li><a href="ui-modals.html">Modals</a></li>
              <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
              <li><a href="ui-tabs.html">Tabs</a></li>
              <li><a href="ui-progressbars.html">Progress Bars</a></li>
              <li><a href="ui-notifications.html">Notification</a></li>
              <li><a href="ui-grid.html">Grid</a></li>
              <li><a href="ui-sweet-alert.html">Sweet Alert</a></li>
              <li><a href="ui-bootstrap.html">Bootstrap UI</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i class="fi-box"></i><span> Icons </span>
              <span class="menu-arrow"></span
            ></a>
            <ul class="nav-second-level" aria-expanded="false">
              <li>
                <a href="icons-materialdesign.html">Material Design</a>
              </li>
              <li><a href="icons-dripicons.html">Dripicons</a></li>
              <li><a href="icons-fontawesome.html">Font awesome</a></li>
              <li><a href="icons-feather.html">Feather Icons</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i class="fi-bar-graph-2"></i><span> Graphs </span>
              <span class="menu-arrow"></span
            ></a>
            <ul class="nav-second-level" aria-expanded="false">
              <li><a href="chart-flot.html">Flot Chart</a></li>
              <li><a href="chart-morris.html">Morris Chart</a></li>
              <li><a href="chart-chartjs.html">Chartjs Chart</a></li>
              <li><a href="chart-sparkline.html">Sparkline Chart</a></li>
              <li><a href="chart-knob.html">Jquery Knob</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i class="fi-mail"></i><span> Email </span>
              <span class="menu-arrow"></span
            ></a>
            <ul class="nav-second-level" aria-expanded="false">
              <li><a href="email-inbox.html">Inbox</a></li>
              <li><a href="email-read.html">Read Email</a></li>
              <li><a href="email-compose.html">Compose Email</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i class="fi-disc"></i
              ><span class="badge badge-warning pull-right">09</span>
              <span> Forms </span></a
            >
            <ul class="nav-second-level" aria-expanded="false">
              <li><a href="form-elements.html">Form Elements</a></li>
              <li><a href="form-advanced.html">Form Advanced</a></li>
              <li><a href="form-validation.html">Form Validation</a></li>
              <li><a href="form-pickers.html">Form Pickers</a></li>
              <li><a href="form-wizard.html">Form Wizard</a></li>
              <li><a href="form-mask.html">Form Masks</a></li>
              <li><a href="form-wysiwig.html">Wysiwig Editors</a></li>
              <li><a href="form-x-editable.html">X Editable</a></li>
              <li><a href="form-uploads.html">Multiple File Upload</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i class="fi-layout"></i> <span> Tables </span>
              <span class="menu-arrow"></span
            ></a>
            <ul class="nav-second-level" aria-expanded="false">
              <li><a href="tables-basic.html">Basic Tables</a></li>
              <li><a href="tables-datatable.html">Data Tables</a></li>
              <li><a href="tables-responsive.html">Responsive Table</a></li>
              <li><a href="tables-tablesaw.html">Tablesaw Tables</a></li>
              <li><a href="tables-editable.html">Editable Tables</a></li>
            </ul>
          </li>

          <li class="menu-title">More</li>

          <li>
            <a href="javascript: void(0);"
              ><i class="fi-map"></i> <span> Maps </span>
              <span class="menu-arrow"></span
            ></a>
            <ul class="nav-second-level" aria-expanded="false">
              <li><a href="maps-google.html">Google Maps</a></li>
              <li><a href="maps-vector.html">Vector Maps</a></li>
              <li><a href="maps-mapael.html">Mapael Maps</a></li>
            </ul>
          </li>

          <li>
            <a href="calendar.html"
              ><i class="fi-clock"></i> <span>Calendar</span>
            </a>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i class="fi-paper-stack"></i><span> Pages </span>
              <span class="menu-arrow"></span
            ></a>
            <ul class="nav-second-level" aria-expanded="false">
              <li><a href="page-starter.html">Starter Page</a></li>
              <li><a href="page-login.html">Login</a></li>
              <li><a href="page-register.html">Register</a></li>
              <li><a href="page-logout.html">Logout</a></li>
              <li><a href="page-recoverpw.html">Recover Password</a></li>
              <li><a href="page-lock-screen.html">Lock Screen</a></li>
              <li><a href="page-confirm-mail.html">Confirm Mail</a></li>
              <li><a href="page-404.html">Error 404</a></li>
              <li><a href="page-404-alt.html">Error 404-alt</a></li>
              <li><a href="page-500.html">Error 500</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript:void(0);"
              ><i class="fi-marquee-plus"></i
              ><span class="badge badge-success pull-right">Hot</span>
              <span> Extra Pages </span></a
            >
            <ul class="nav-second-level" aria-expanded="false">
              <li><a href="extras-timeline.html">Timeline</a></li>
              <li><a href="extras-invoice.html">Invoice</a></li>
              <li><a href="extras-faq.html">FAQ</a></li>
              <li><a href="extras-pricing.html">Pricing</a></li>
              <li>
                <a href="extras-email-template.html">Email Templates</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);"
              ><i class="fi-share"></i> <span> Multi Level </span>
              <span class="menu-arrow"></span
            ></a>
            <ul class="nav-second-level nav" aria-expanded="false">
              <li><a href="javascript: void(0);">Level 1.1</a></li>
              <li>
                <a href="javascript: void(0);" aria-expanded="false"
                  >Level 1.2 <span class="menu-arrow"></span
                ></a>
                <ul class="nav-third-level nav" aria-expanded="false">
                  <li><a href="javascript: void(0);">Level 2.1</a></li>
                  <li><a href="javascript: void(0);">Level 2.2</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Sidebar -->
      <div class="clearfix"></div>
    </div>
    <!-- Sidebar -left -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        height: "557px",
        size: 4,
        railVisible: true,
        railOpacity: 0.01,
        color: "#000",
      },
    };
  },
};
</script>