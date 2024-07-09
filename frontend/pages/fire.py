from music21 import stream, note, tempo, meter, instrument

def create_notes(note_list):
    notes = []
    for n in note_list:
        if n == "rest":
            notes.append(note.Rest())
        else:
            notes.append(note.Note(n))
    return notes

# Créer la partition
score = stream.Score()

# Définir le tempo
tempo_mark = tempo.MetronomeMark(number=130)
score.append(tempo_mark)

# Ajouter les parties des instruments
drums_part = stream.Part()
synth_part = stream.Part()
piano_part = stream.Part()
bass_part = stream.Part()
guitar_part = stream.Part()
strings_part = stream.Part()

# Ajouter les instruments
drums_part.insert(0, instrument.UnpitchedPercussion())
synth_part.insert(0, instrument.ElectricOrgan())
piano_part.insert(0, instrument.Piano())
bass_part.insert(0, instrument.ElectricBass())
guitar_part.insert(0, instrument.ElectricGuitar())


# Ajouter les mesures
time_signature = meter.TimeSignature('4/4')
drums_part.append(time_signature)
synth_part.append(time_signature)
piano_part.append(time_signature)
bass_part.append(time_signature)
guitar_part.append(time_signature)
strings_part.append(time_signature)

# Notes pour chaque section
intro_notes = ["C5", "D5", "E5", "F5", "C5", "D5", "E5", "F5"]
verse1_notes = ["C5", "D5", "E5", "F5", "C5", "D5", "E5", "F5", "C5", "D5", "E5", "F5", "G5", "A5", "G5"]
pre_chorus_notes = ["A4", "A4", "B4", "C5", "C5", "D5", "E5", "F5", "E4", "E4", "F4", "G4", "G4", "A4", "B4", "C5", "D4", "E4", "F4", "G4", "A4", "G4", "F4", "G4", "F4", "E4", "D4", "C4"]
chorus_notes = ["G5", "A5", "G5", "E5", "C5", "D5", "E5", "F5", "E5", "D5", "C5"]
verse2_notes = ["F4", "G4", "A4", "G4", "F4", "E4", "F4", "G4", "A4", "G4", "F4", "E4", "E4", "F4", "G4", "A4", "G4", "A4", "G4", "E4"]
bridge_notes = ["D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A4", "G4", "F4", "E4", "D4", "C4", "B4", "A4"]
outro_notes = ["G5", "A5", "G5", "E5", "C5", "D5", "E5", "F5", "E5", "D5", "C5"]

# Ajouter les notes aux parties
synth_part.append(create_notes(intro_notes))
synth_part.append(create_notes(verse1_notes))
synth_part.append(create_notes(pre_chorus_notes))
synth_part.append(create_notes(chorus_notes))
synth_part.append(create_notes(verse2_notes))
synth_part.append(create_notes(pre_chorus_notes))  # Répéter le pre-chorus
synth_part.append(create_notes(chorus_notes))       # Répéter le chorus
synth_part.append(create_notes(bridge_notes))
synth_part.append(create_notes(chorus_notes))       # Répéter le chorus
synth_part.append(create_notes(outro_notes))        # Outro

# Ajout d'un rythme de base pour la batterie
drums_notes = ["rest"] * len(intro_notes + verse1_notes + pre_chorus_notes + chorus_notes + verse2_notes + pre_chorus_notes + chorus_notes + bridge_notes + chorus_notes + outro_notes)
drums_notes[0] = "C2"  # Juste pour ajouter une note, tu devrais ajouter un vrai pattern de batterie

# Ajout des lignes de basse
bass_notes = ["C2", "D2", "E2", "F2", "C2", "D2", "E2", "F2", "C2", "D2", "E2", "F2", "G2", "A2", "G2"]

# Ajouter les notes aux parties correspondantes
drums_part.append(create_notes(drums_notes))
bass_part.append(create_notes(bass_notes))

# Ajouter les parties à la partition
score.append(drums_part)
score.append(synth_part)
score.append(piano_part)
score.append(bass_part)
score.append(guitar_part)
score.append(strings_part)

# Enregistrer la partition en MusicXML
score.write('musicxml', 'Fire_in_the_Night_Sheet_Music.xml')
