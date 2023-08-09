function openExternalPage(url) {
    // External pages should display a confirmation window
    var confirmationMessage = "Notice: You are now leaving the BSA E-Filing web site.";

    // If the user clicks ok then open the new window
    if (confirm(confirmationMessage)) {
        window.open(url);
    }
}