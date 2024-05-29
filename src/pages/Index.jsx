import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, IconButton, HStack } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCar, FaHome } from "react-icons/fa";

const Index = () => {
  const [address, setAddress] = useState("");
  const [tripData, setTripData] = useState(null);

  const handleSimulateTrip = () => {
    // Simulate fetching nearby places and selecting a random destination
    const destinations = ["Place A", "Place B", "Place C"];
    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];

    // Simulate trip data
    const simulatedTrip = {
      start: address,
      destination: randomDestination,
      gpsPoints: [
        { lat: 40.712776, lng: -74.005974, speed: 30, acceleration: 2 },
        { lat: 40.713776, lng: -74.004974, speed: 35, acceleration: 3 },
        { lat: 40.714776, lng: -74.003974, speed: 40, acceleration: 4 },
      ],
    };

    setTripData(simulatedTrip);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Simulate Car Trip</Text>
        <Input placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <Button colorScheme="blue" onClick={handleSimulateTrip}>
          Simulate Trip
        </Button>
        {tripData && (
          <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
            <Text fontSize="lg">Trip Details</Text>
            <HStack spacing={2}>
              <FaHome />
              <Text>Start: {tripData.start}</Text>
            </HStack>
            <HStack spacing={2}>
              <FaMapMarkerAlt />
              <Text>Destination: {tripData.destination}</Text>
            </HStack>
            <Box mt={4}>
              <Text fontSize="md">GPS Points:</Text>
              {tripData.gpsPoints.map((point, index) => (
                <HStack key={index} spacing={2}>
                  <FaCar />
                  <Text>
                    Lat: {point.lat}, Lng: {point.lng}, Speed: {point.speed} km/h, Acceleration: {point.acceleration} m/s²
                  </Text>
                </HStack>
              ))}
            </Box>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
