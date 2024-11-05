const getAvailableTimes = async (selectedDate) => {
    const startOfDay = new Date(selectedDate.setHours(0, 0, 0, 0)).toISOString();
    const endOfDay = new Date(selectedDate.setHours(23, 59, 59, 999)).toISOString();
  
    const response = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: startOfDay,
      timeMax: endOfDay,
      showDeleted: false,
      singleEvents: true,
      orderBy: 'startTime',
    });
  
    const events = response.result.items;
    // Aquí puedes procesar los eventos para determinar los horarios disponibles
    // por ejemplo, devolviendo las franjas de tiempo libres
  };
  