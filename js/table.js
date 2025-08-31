const services = [
  {
    serviceName: "Cloud Storage",
    ownerEmail: "prabowo@example.com",
    status: "Active",
    type: "Storage",
  },
  {
    serviceName: "Hosting Pro",
    ownerEmail: "abah@example.com",
    status: "Non-Active",
    type: "Hosting",
  },
  {
    serviceName: "API Gateway",
    ownerEmail: "janggar@example.com",
    status: "Active",
    type: "Networking",
  },
];

const tbody = document.getElementById("services-tbody");
const template = document.getElementById("service-row");

// Table data loop
services.forEach((service, i) => {
  const clone = template.content.cloneNode(true);

  clone.querySelector(".row-id").textContent = i + 1;
  clone.querySelector(".row-name").textContent = service.serviceName;
  clone.querySelector(".row-email").textContent = service.ownerEmail;

  const statusEl = clone.querySelector(".row-status");
  statusEl.textContent = service.status;

  statusEl.classList.add(
    "inline-block",
    "whitespace-nowrap",
    "px-3",
    "py-1",
    "rounded-md",
    "text-xs",
    "md:text-sm",
    "font-medium"
  );

  if (service.status === "Active") {
    statusEl.classList.add("bg-green-100", "text-green-700");
  } else {
    statusEl.classList.add("bg-red-100", "text-red-600");
  }

  clone.querySelector(".row-type").textContent = service.type;

  clone.querySelector(".edit-btn").addEventListener("click", () => {
    alert(`Edit service: ${service.serviceName}`);
  });
  clone.querySelector(".delete-btn").addEventListener("click", () => {
    alert(`Delete service: ${service.serviceName}`);
  });

  tbody.appendChild(clone);
});
